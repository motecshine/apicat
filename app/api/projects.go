package api

import (
	"encoding/base64"
	"net/http"
	"strings"

	"github.com/apicat/apicat/commom/spec"
	"github.com/apicat/apicat/commom/spec/plugin/openapi"
	"github.com/apicat/apicat/commom/translator"
	"github.com/apicat/apicat/models"

	"github.com/gin-gonic/gin"
	"github.com/lithammer/shortuuid/v4"
)

type CreateProject struct {
	Title string `json:"title" binding:"required,lte=255"`
	Data  string `json:"data"`
}

type UpdateProject struct {
	Title       string `json:"title" binding:"required,lte=255"`
	Description string `json:"description" binding:"lte=255"`
}

type ProjectID struct {
	ID string `uri:"id" binding:"required"`
}

type ExportProject struct {
	Type     string `form:"type" binding:"required,oneof=apicat swagger openapi"`
	Download string `form:"download" binding:"omitempty,oneof=true false"`
}

func ProjectsList(ctx *gin.Context) {
	project, _ := models.NewProjects()
	projects, err := project.List()
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{
			"message": translator.Trasnlate(ctx, &translator.TT{ID: "Projects.NotFound"}),
		})
		return
	}

	result := make([]gin.H, 0)
	for _, p := range projects {
		result = append(result, gin.H{
			"id":          p.PublicId,
			"title":       p.Title,
			"description": p.Description,
			"created_at":  p.CreatedAt.Format("2006-01-02 15:04:05"),
			"updated_at":  p.UpdatedAt.Format("2006-01-02 15:04:05"),
		})
	}

	ctx.JSON(http.StatusOK, result)
}

func ProjectsCreate(ctx *gin.Context) {
	var (
		data       CreateProject
		content    *spec.Spec
		rawContent []byte
		err        error
	)

	if err := translator.ValiadteTransErr(ctx, ctx.ShouldBindJSON(&data)); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{
			"message": err.Error(),
		})
		return
	}

	project, _ := models.NewProjects()
	if data.Data != "" {
		var base64Content string
		if strings.Contains(data.Data, "data:application/json;base64,") {
			base64Content = strings.Replace(data.Data, "data:application/json;base64,", "", 1)
		} else {
			base64Content = strings.Replace(data.Data, "data:application/x-yaml;base64,", "", 1)
		}
		rawContent, err = base64.StdEncoding.DecodeString(base64Content)
		if err != nil {
			ctx.JSON(http.StatusUnprocessableEntity, gin.H{
				"message": translator.Trasnlate(ctx, &translator.TT{ID: "Projects.ImportFail"}),
			})
			return
		}

		content, err = openapi.Decode(rawContent)
		if err != nil {
			ctx.JSON(http.StatusUnprocessableEntity, gin.H{
				"message": translator.Trasnlate(ctx, &translator.TT{ID: "Projects.ImportFail"}),
			})
			return
		}
		project.Description = content.Info.Description
	}
	project.Title = data.Title
	project.PublicId = shortuuid.New()
	project.Visibility = 0
	if err := project.Create(); err != nil {
		ctx.JSON(http.StatusUnprocessableEntity, gin.H{
			"message": translator.Trasnlate(ctx, &translator.TT{ID: "Projects.CreateFail"}),
		})
		return
	}

	// 进行数据导入工作
	if data.Data != "" {
		models.ServersImport(project.ID, content.Servers)
		definitionSchemas := models.DefinitionsImport(project.ID, content.Definitions.Schemas)
		models.CollectionsImport(project.ID, 0, content.Collections, definitionSchemas)
	}

	ctx.JSON(http.StatusCreated, gin.H{
		"id":          project.PublicId,
		"title":       project.Title,
		"description": project.Description,
		"created_at":  project.CreatedAt.Format("2006-01-02 15:04:05"),
		"updated_at":  project.UpdatedAt.Format("2006-01-02 15:04:05"),
	})
}

func ProjectsUpdate(ctx *gin.Context) {
	var (
		uriData ProjectID
		data    UpdateProject
	)

	if err := translator.ValiadteTransErr(ctx, ctx.ShouldBindUri(&uriData)); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{
			"message": err.Error(),
		})
		return
	}

	if err := translator.ValiadteTransErr(ctx, ctx.ShouldBindJSON(&data)); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{
			"message": err.Error(),
		})
		return
	}

	project, err := models.NewProjects(uriData.ID)
	if err != nil {
		ctx.JSON(http.StatusNotFound, gin.H{
			"message": translator.Trasnlate(ctx, &translator.TT{ID: "Projects.NotFound"}),
		})
		return
	}

	project.Title = data.Title
	project.Description = data.Description
	if err := project.Save(); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{
			"message": translator.Trasnlate(ctx, &translator.TT{ID: "Projects.UpdateFail"}),
		})
		return
	}

	ctx.Status(http.StatusCreated)
}

func ProjectsDelete(ctx *gin.Context) {
	var data ProjectID

	if err := translator.ValiadteTransErr(ctx, ctx.ShouldBindUri(&data)); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{
			"message": err.Error(),
		})
		return
	}

	project, err := models.NewProjects(data.ID)
	if err != nil {
		ctx.JSON(http.StatusNotFound, gin.H{
			"message": translator.Trasnlate(ctx, &translator.TT{ID: "Projects.NotFound"}),
		})
		return
	}
	if err := project.Delete(); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{
			"message": translator.Trasnlate(ctx, &translator.TT{ID: "Projects.DeleteFail"}),
		})
		return
	}

	ctx.Status(http.StatusNoContent)
}

func ProjectsGet(ctx *gin.Context) {
	var data ProjectID

	if err := translator.ValiadteTransErr(ctx, ctx.ShouldBindUri(&data)); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{
			"message": err.Error(),
		})
		return
	}

	project, err := models.NewProjects(data.ID)
	if err != nil {
		ctx.JSON(http.StatusNotFound, gin.H{
			"message": translator.Trasnlate(ctx, &translator.TT{ID: "Projects.NotFound"}),
		})
		return
	}

	ctx.JSON(http.StatusOK, gin.H{
		"id":          project.PublicId,
		"title":       project.Title,
		"description": project.Description,
		"created_at":  project.CreatedAt.Format("2006-01-02 15:04:05"),
		"updated_at":  project.UpdatedAt.Format("2006-01-02 15:04:05"),
	})
}

func ProjectDataGet(ctx *gin.Context) {
	var (
		uriData ProjectID
		data    ExportProject
		content []byte
		err     error
	)

	if err := translator.ValiadteTransErr(ctx, ctx.ShouldBindUri(&uriData)); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{
			"message": err.Error(),
		})
		return
	}

	if err := translator.ValiadteTransErr(ctx, ctx.ShouldBindQuery(&data)); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{
			"message": err.Error(),
		})
		return
	}

	project, err := models.NewProjects(uriData.ID)
	if err != nil {
		ctx.JSON(http.StatusNotFound, gin.H{
			"message": translator.Trasnlate(ctx, &translator.TT{ID: "Projects.NotFound"}),
		})
		return
	}

	apicatData := &spec.Spec{}
	apicatData.ApiCat = "apicat"
	apicatData.Info = &spec.Info{
		ID:          project.PublicId,
		Title:       project.Title,
		Description: project.Description,
		Version:     "1.0.0",
	}

	// apicatData.Servers = models.ServersExport(project.ID)
	// apicatData.Common = models.CommonsExport(project.ID)
	// apicatData.Definitions = models.DefinitionsExport(project.ID)
	// apicatData.Collections = models.CollectionsExport(project.ID)

	if data.Type == "swagger" {
		content, err = openapi.Encode(apicatData, "2.0")
	} else if data.Type == "openapi" {
		content, err = openapi.Encode(apicatData, "3.0.0")
	} else {
		content, err = apicatData.ToJSON(spec.JSONOption{Indent: "  "})
	}

	if err != nil {
		ctx.JSON(http.StatusServiceUnavailable, gin.H{
			"message": translator.Trasnlate(ctx, &translator.TT{ID: "Projects.ExportFail"}),
		})
		return
	}

	if data.Download == "true" {
		ctx.Header("Content-Disposition", "attachment; filename="+project.Title+"-"+data.Type+".json")
		ctx.Data(http.StatusOK, "application/octet-stream", content)
	} else {
		ctx.Data(http.StatusOK, "application/json", content)
	}
}
