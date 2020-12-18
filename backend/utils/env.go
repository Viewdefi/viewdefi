package utils

import (
	"github.com/joho/godotenv"
	"log"
	"os"
)

func GetEnv(key string) string {
	err := godotenv.Load(".env")
	if err != nil {
		log.Fatal("err occurred while loading .env file")
	}

	return os.Getenv(key)
}