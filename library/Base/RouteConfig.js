const express = require('express');

module.exports =  class RouteConfig
{

    constructor(app, name)
    {
        this.app = app;
        this.name = name;
        this.configureRoutes();
    }

    getName()
    {
        return this.name;
    }
}