FROM node:18-alpine AS deps

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
# hadolint ignore=DL3018
RUN apk add --no-cache libc6-compat

WORKDIR  /src/app

COPY package.json yarn.lock* ./

RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

FROM node:18-alpine AS builder

WORKDIR  /src/app

COPY --from=deps  /src/app/node_modules ./node_modules

COPY . .

RUN yarn build

FROM node:18-alpine AS runner

WORKDIR  /src/app

ENV NODE_ENV=production

RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001

COPY --from=builder  /src/app/public ./public

COPY --from=builder --chown=nextjs:nodejs  /src/app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs  /src/app/.next/static ./.next/static

USER nextjs

CMD ["node", "server.js"]
