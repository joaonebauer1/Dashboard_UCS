<?php
    namespace App\Models;

    class Bairro
    {
        private static $table = 'bairro';

        public static function select(int $id) {
            $connPdo = new \PDO(DBDRIVE.': host='.DBHOST.'; dbname='.DBNAME, DBUSER, DBPASS);

            $sql = 'SELECT * FROM '.self::$table.' WHERE id = :id';
            $stmt = $connPdo->prepare($sql);
            $stmt->bindValue(':id', $id);
            $stmt->execute();

            if ($stmt->rowCount() > 0) {
                return $stmt->fetch(\PDO::FETCH_ASSOC);
            } else {
                throw new \Exception("Nenhum bairro encontrado!");
            }
        }

        public static function insert($bairro, $idCidade)
        {
            $connPdo = new \PDO(DBDRIVE.': host='.DBHOST.'; dbname='.DBNAME, DBUSER, DBPASS);

            $sql = 'INSERT INTO '.self::$table.' (ba_bairro, ba_id_cidade) VALUES (:bairro, :idcidade)';
            $stmt = $connPdo->prepare($sql);            
            $stmt->bindValue(':bairro', $bairro);
            $stmt->bindValue(':idcidade', $idCidade);            
            $stmt->execute();

            if ($stmt->rowCount() > 0) {
                return true;
            } else {
                false;
            }
        }
    }