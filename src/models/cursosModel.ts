import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, ManyToMany, JoinTable } from "typeorm"
import { Profesor } from "./profesoresModel";
import { Estudiante } from "./estudiantesModel";

@Entity('cursos')
export class Curso extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: String;

    @Column('text')
    descripcion: String;

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(() => Profesor, (profesor) => profesor.cursos)
    @JoinColumn({ name: 'profesor_id'})
    profesor: Profesor;

    @ManyToMany(() => Estudiante)
    @JoinTable({
        name: 'cursos_estudiantes',
        joinColumn: {name: 'curso_id'},
        inverseJoinColumn: {name: 'estudiante_id'}
    })
    estudiantes: Estudiante[];
}