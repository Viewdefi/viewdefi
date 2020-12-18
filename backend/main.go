package main

import (
	"backend/api"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	r.GET("/", func(c *gin.Context) {
		c.String(200, "Server is running at 8080 port")
	})

	handler := api.Handler{}
	v1 := r.Group("/v1")
	{
		// 현재 지역 정보 가져오기
		v1.GET("/currentList", handler.CurrentListApi)

		// 지역 정보 가져오기
		v1.GET("/home/:id", handler.HomeDetailApi)

		// 유동성 공급 API
		v1.GET("/provide", handler.ProvideApi)

		// 보험 가입 API
		v1.GET("/register", handler.RegisterApi)
	}

	r.Run()
}
