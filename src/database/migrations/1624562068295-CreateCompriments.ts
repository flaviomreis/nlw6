import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCompriments1624562068295 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'compliments',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'user_sender_id',
                        type: 'varchar',
                    },
                    {
                        name: 'user_receiver_id',
                        type: 'varchar',
                    },
                    {
                        name: 'tag_id',
                        type: 'varchar'
                    },
                    {
                        name: 'message',
                        type: 'varchar'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ],
                foreignKeys: [
                    {
                        name: 'FKUserSenderCompliments',
                        columnNames: ['user_sender_id'],
                        referencedTableName: 'users',
                        referencedColumnNames: ['id'],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE'
                    },
                    {
                        name: 'FKUserReceiverCompliments',
                        columnNames: ['user_receiver_id'],
                        referencedTableName: 'users',
                        referencedColumnNames: ['id'],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('compliments');
    }

}
