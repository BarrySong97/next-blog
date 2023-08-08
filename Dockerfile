FROM gplane/pnpm:latest AS builder

# Create app directory
WORKDIR /app
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
COPY pnpm-lock.yaml ./

# Install app dependencies
RUN pnpm i
COPY . .

RUN pnpm run build

# 启动应用
EXPOSE 9000
CMD ["pnpm", "start"]
