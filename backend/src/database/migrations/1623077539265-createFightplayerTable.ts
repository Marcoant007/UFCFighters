import { MigrationInterface, QueryRunner } from 'typeorm';


export class createFightplayerTable1623077539265 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        Create table FightPlayer(
            id serial PRIMARY KEY,
            name varchar(50) not null,
            idade int not null,
            altura numeric not null,
            peso numeric not null,
            vitorias int not null,
            derrotas int not null,
            empates int not null
        )`)
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`Drop table FightPlayer`);
    }

}
