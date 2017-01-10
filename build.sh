#!/bin/bash

buildScripts () {
    echo "Building Scripts..."
    echo "-------------------"

    echo "Linting and minifying scripts..."
    r.js -o build.js

    echo "Scripts built."
}

echo "Starting build!"
echo ""

buildScripts

echo ""
echo "Finished building!"