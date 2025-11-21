npm init -y
npm install -D typescript ts-node @type/node
npx tsc --init
npm i -g typescript
npx ts-node ts-demo.ts <-after ts-demo.ts file create->
npx i -g ts-node
ts-node ts-demo.ts
npm i -g ts-node

npm i express zod
npm i -D typescript ts-node @types/node @types/express

//Package.jos ko script ma add yo
"dev": "nodemon --exec ts-node src/index.ts",

//make .gitignore file and add
.gitignore

# Environment variables

.env
.env.\*
!.env.example

# Dependencies

/node_modules

# TypeScript build output

/dist

# OS generated files

.DS_Store

# Test coverage

/coverage

//tsconfig.js file ma fully replace with
{
"compilerOptions": {
"target": "ES2020",
"module": "commonjs",
"moduleResolution": "node",
"outDir": "dist",
"rootDir": "src",
"esModuleInterop": true,
"strict": true,
"skipLibCheck": true,
"forceConsistentCasingInFileNames": true,
"resolveJsonModule": true,
"declaration": true,
"declarationMap": true,
"sourceMap": true
},
"include": ["src/**/*"],
"exclude": ["node_modules", "dist"]
}

//make src folder in root and make index.ts file inside it
