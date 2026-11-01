import { body } from "express-validator";

// Para POST /api/auth/register
export const registerValidator = [
  body("username")
    .trim()
    .notEmpty()
    .withMessage("El username es obligatorio")
    .isLength({ min: 3, max: 20 })
    .withMessage("El username debe tener entre 3 y 20 caracteres"),

  body("email")
    .trim()
    .notEmpty()
    .withMessage("El correo es obligatorio")
    .isEmail()
    .withMessage("El correo no es válido"),

  body("password")
    .notEmpty()
    .withMessage("La contraseña es obligatoria")
    .isLength({ min: 6 })
    .withMessage("La contraseña debe tener como mínimo 6 caracteres"),

  body("profile.firstName")
    .optional()
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage("El nombre debe tener entre 2 y 50 caracteres"),

  body("profile.lastName")
    .optional()
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage("El apellido debe tener entre 2 y 50 caracteres"),

  body("profile.birthDate")
    .optional()
    .isISO8601()
    .withMessage("La fecha de nacimiento no es válida")
    //ese value es el valor que envia el usuario por la petición
    .custom((value) => {
      //new date(value) tiene el valor de la petición del usuario,
      //y el otro como no recibe nada crea automaticamente una nueva fecha con la hora y día del momento
      if (new Date(value) >= new Date()) {
        //el throw hace que se corte todo si falla la validacion
        throw new Error("La fecha de nacimiento no puede ser futura");
      }
      //esto avisa que si paso la validacion con exito
      return true;
    }),

  body("profile.phone")
    .optional()
    .isNumeric()
    .withMessage("El teléfono debe contener solo números")
    .isLength({ min: 8, max: 15 })
    .withMessage("El teléfono debe tener entre 8 y 15 dígitos"),
];

// Para POST /api/auth/login
export const loginValidator = [
  body("email")
    .trim()
    .notEmpty()
    .withMessage("El correo es obligatorio")
    .isEmail()
    .withMessage("El correo no es válido"),

  body("password")
    .notEmpty()
    .withMessage("La contraseña no puede estar vacía"),
];

// Para PUT /api/auth/profile (solo el perfil embebido)
export const updateProfileValidator = [
  body("profile.firstName")
    .optional()
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage("El nombre debe tener entre 2 y 50 caracteres"),

  body("profile.lastName")
    .optional()
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage("El apellido debe tener entre 2 y 50 caracteres"),

  body("profile.birthDate")
    .optional()
    .isISO8601()
    .withMessage("La fecha de nacimiento no es válida")
    .custom((value) => {
      if (new Date(value) >= new Date()) {
        throw new Error("La fecha de nacimiento no puede ser futura");
      }
      return true;
    }),

  body("profile.phone")
    .optional()
    .isNumeric()
    .withMessage("El teléfono debe contener solo números")
    .isLength({ min: 8, max: 15 })
    .withMessage("El teléfono debe tener entre 8 y 15 dígitos"),
];

// Para PUT /api/users/:id (admin actualiza cualquier campo del user)
export const updateUserValidator = [
  body("username")
    .optional()
    .trim()
    .isLength({ min: 3, max: 20 })
    .withMessage("El username debe tener entre 3 y 20 caracteres"),

  body("email")
    .optional()
    .trim()
    .isEmail()
    .withMessage("El correo no es válido"),

  body("password")
    .optional()
    .isLength({ min: 6 })
    .withMessage("La contraseña debe tener como mínimo 6 caracteres"),

  body("profile.firstName")
    .optional()
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage("El nombre debe tener entre 2 y 50 caracteres"),

  body("profile.lastName")
    .optional()
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage("El apellido debe tener entre 2 y 50 caracteres"),

  body("profile.birthDate")
    .optional()
    .isISO8601()
    .withMessage("La fecha de nacimiento no es válida")
    .custom((value) => {
      if (new Date(value) >= new Date()) {
        throw new Error("La fecha de nacimiento no puede ser futura");
      }
      return true;
    }),

  body("profile.phone")
    .optional()
    .isNumeric()
    .withMessage("El teléfono debe contener solo números")
    .isLength({ min: 8, max: 15 })
    .withMessage("El teléfono debe tener entre 8 y 15 dígitos"),
];
