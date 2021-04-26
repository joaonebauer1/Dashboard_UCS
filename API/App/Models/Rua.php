<?php
    namespace App\Models;

    class Rua
    {
        private static $table = 'rua';

        public static function select(int $id) {
            $connPdo = new \PDO(DBDRIVE.': host='.DBHOST.'; dbname='.DBNAME, DBUSER, DBPASS);

            $sql = 'SELECT * FROM '.self::$table.' WHERE id = :id';
            $stmt = $connPdo->prepare($sql);
            $stmt->bindValue(':id', $id);
            $stmt->execute();

            if ($stmt->rowCount() > 0) {
                return $stmt->fetch(\PDO::FETCH_ASSOC);
            } else {
                throw new \Exception("Nenhuma rua encontrada!");
            }
        }

        public static function insert($rua, $cep, $idBairro)
        {
            $connPdo = new \PDO(DBDRIVE.': host='.DBHOST.'; dbname='.DBNAME, DBUSER, DBPASS);

            $sql = 'INSERT INTO '.self::$table.' (ru_rua, ru_cep, ru_id_bairro) VALUES (:rua, :cep, :idbairro)';
            $stmt = $connPdo->prepare($sql);            
            $stmt->bindValue(':rua', $rua);
            $stmt->bindValue(':cep', $cep);
            $stmt->bindValue(':idbairro', $idbairro);            
            $stmt->execute();

            if ($stmt->rowCount() > 0) {
                return true;
            } else {
                false;
            }
        }
    }