#!/bin/bash

if [ $ENV == "dev" ]
then
    ng build --configuration=dev
else
    ng build --configuration=production
fi