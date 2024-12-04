import { DataSource } from "typeorm";
import { Curso } from "../models/cursosModel";
import { Estudiante } from "../models/estudiantesModel";
import { Profesor } from "../models/profesoresModel";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "127.0.0.1",
    port: 3306,
    username: "root",
    password: "",
    database: "cursos2",
    logging: true,
    entities: [Curso, Estudiante, Profesor],
    synchronize: false,
})