<?php
    namespace App\Models;

    class Cidade
    {
        private static $table = 'cidade';

        public static function select(int $id) {
            $connPdo = new \PDO(DBDRIVE.': host='.DBHOST.'; dbname='.DBNAME, DBUSER, DBPASS);

            $sql = 'SELECT * FROM '.self::$table.' WHERE id = :id';
            $stmt = $connPdo->prepare($sql);
            $stmt->bindValue(':id', $id);
            $stmt->execute();

            if ($stmt->rowCount() > 0) {
                return $stmt->fetch(\PDO::FETCH_ASSOC);
            } else {
                throw new \Exception("Nenhuma cidade encontrada!");
            }
        }

        public static function insert($cidade, $idEstado)
        {
            $connPdo = new \PDO(DBDRIVE.': host='.DBHOST.'; dbname='.DBNAME, DBUSER, DBPASS);

            $sql = 'INSERT INTO '.self::$table.' (cd_cidade, cd_id_estado, cd_cod_ibge) VALUES (:cidade, :idestado, 0)';
            $stmt = $connPdo->prepare($sql);            
            $stmt->bindValue(':cidade', $cidade);
            $stmt->bindValue(':idesatdo', $idEstado);            
            $stmt->execute();

            if ($stmt->rowCount() > 0) {
                return true;
            } else {
                false;
            }
        }
    }