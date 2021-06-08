import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('fightplayer')
class Fighters{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    idade: number

    @Column()
    peso: number

    @Column()
    altura: number

    @Column()
    vitorias: number

    @Column()
    derrotas: number

    @Column()
    empates: number
}

export default Fighters