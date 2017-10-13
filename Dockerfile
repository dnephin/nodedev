
FROM        node:8.7-alpine

# glibc is required for flow
ARG         GLIBC_REPO=https://raw.githubusercontent.com/sgerrand/alpine-pkg-glibc
ARG         GLIBC_DL=https://github.com/sgerrand/alpine-pkg-glibc/releases/download
RUN         apk --no-cache add ca-certificates wget && \
            wget -q -O /etc/apk/keys/sgerrand.rsa.pub ${GLIBC_REPO}/master/sgerrand.rsa.pub && \
            mkdir -p /dl && \
            wget -q -O /dl/glibc.apk ${GLIBC_DL}/2.26-r0/glibc-2.26-r0.apk && \
            apk add /dl/glibc.apk

WORKDIR     /work
ENV         PATH=$PATH:/work/node_modules/.bin
