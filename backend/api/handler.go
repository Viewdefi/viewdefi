package api

import "github.com/gin-gonic/gin"

type Handler struct { }

func (h *Handler) CurrentListApi(c *gin.Context) {
	c.String(200, "CurrentList API")
}

func (h Handler) HomeDetailApi(c *gin.Context) {
	c.String(200, "Home Detail API")
}

func (h Handler) ProvideApi(c *gin.Context) {
	c.String(200, "Provide API")
}

func (h Handler) RegisterApi(c *gin.Context) {
	c.String(200, "Register API")
}

