var express = require('express')
var dotenv = require('dotenv')
var Twitter = require('twitter')
var sentiment = require('sentiment')

//load environment variables
dotenv.load()

//configure twitter client
