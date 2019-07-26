#!/bin/sh

if [[ "$TRAVIS_TAG" =~ [^v] ]]; then
    echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
    docker build -t backend-image .
    docker images
        docker tag backend-image ${DOCKER_USERNAME}/todoapp:backend-${TAG}
    docker tag backend-image ${DOCKER_USERNAME}/todoapp:backend-latest
    docker push ${DOCKER_USERNAME}/todoapp:backend-${TAG}
    docker push ${DOCKER_USERNAME}/todoapp:backend-latest
fi
