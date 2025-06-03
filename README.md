# 🛠️ Challenge - Corrección de Bugs en el Frontend

Este proyecto simula una pequeña app de gestión de clientes. El frontend ya está armado pero contiene errores y funcionalidades incompletas que deberás solucionar. Tu tarea es corregir los errores indicados abajo y entregar un proyecto con un build limpio y funcional.

---

## ✅ Objetivo

Corregir los siguientes errores presentes en el código y dejar la aplicación funcionando correctamente:

---

## 🐞 Bugs a solucionar

- ❌ **Problemas en el llamado de los estilos de la tabla**  
  Algunos estilos no se están aplicando como se espera. Verificá los imports y el uso correcto de los módulos CSS/SASS.

- ❌ **Errores de tipado en TypeScript**  
  Hay definiciones de tipos incorrectas o faltantes que rompen el build. Debés revisar y corregir la tipificación.

- ❌ **Warnings de SASS**  
  Se han introducido intencionalmente errores de sintaxis en algunos archivos `.scss`. Corregilos para tener un build limpio.

- ❌ **El modal no se abre**  
  Al hacer clic en el botón `"Más"` de cada fila, el modal de detalle del cliente no se muestra. Debería abrirse y mostrar la información completa del cliente.

- ❌ **Falta la funcionalidad de filtro por país**  
  Agregá un campo select (dropdown) para filtrar la lista de clientes por país. El filtro debe actualizar los resultados en tiempo real o al seleccionar un valor.

---

## 📦 Requisitos para entregar

- ✅ La app debe funcionar correctamente en modo desarrollo y build (`npm run build` debe ejecutarse sin errores ni warnings).
- ✅ El modal debe abrirse correctamente y mostrar los datos del cliente seleccionado.
- ✅ El filtro por país debe estar implementado.
- ✅ Los estilos de la tabla deben verse correctamente.
- ✅ No deben quedar errores ni advertencias en consola ni en el build.

---

## 🧪 Cómo probar

```bash
# Instalar dependencias
npm install

# Correr el proyecto
npm run dev

# Validar el build final
npm run build
```
