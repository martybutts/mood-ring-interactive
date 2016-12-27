var express = require('express')
var dotenv = require('dotenv')
var Twitter = require('twitter')
var sentiment = require('sentiment')

//load environment variables
dotenv.load()

//configure twitter client
var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
})
