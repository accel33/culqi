# Culqi Backend Lambda App

Para empezar a utilizar la aplicacion hay que tener instalado [Nodejs](https://nodejs.org/en) en la maquina ejecutando esta aplicacion. Luego correr el siguiente comando dentro de la carpeta:

```
npm install -g serverless
```

```
npm install
```

El package.json del proyecto tiene 2 comandos:

1. Comando para compilar TypeScript y generar el build de la aplicación:
   ```
   npm start
   ```
2. Comando para ejecutar los test de la aplicación en un entorno local:
   ```
   npm test
   ```
3. Comando para ejecutar la aplicación en un entorno local:
   ```
   npm run local
   ```

### Documentacion Postman

https://documenter.getpostman.com/view/3273833/2s9YJhy1Gs

---

### Pruebas en desarrollo

![My Image](images/pruebas.png)

---

### Despliegue en AWS

![My Image](images/deploy.png)

#### Endpoints:

##### POST: https://651v0emplk.execute-api.sa-east-1.amazonaws.com/tokens

##### GET: https://651v0emplk.execute-api.sa-east-1.amazonaws.com/tokens

#### Functions:

     generarToken: culqi-dev-generarToken (10 MB)

     procesarCargo: culqi-dev-procesarCargo (10 MB)
