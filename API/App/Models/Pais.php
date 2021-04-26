<?php
    namespace App\Models;

    class Pais
    {
        private static $table = 'pais';

        public static function select(int $id) {
            $connPdo = new \PDO(DBDRIVE.': host='.DBHOST.'; dbname='.DBNAME, DBUSER, DBPASS);

            $sql = 'SELECT * FROM '.self::$table.' WHERE id = :id';
            $stmt = $connPdo->prepare($sql);
            $stmt->bindValue(':id', $id);
            $stmt->execute();

            if ($stmt->rowCount() > 0) {
                return $stmt->fetch(\PDO::FETCH_ASSOC);
            } else {
                return $stmt->rowCount();
            }
        }

        public static function insert($pais)
        {
            $connPdo = new \PDO(DBDRIVE.': host='.DBHOST.'; dbname='.DBNAME, DBUSER, DBPASS);

            $sql = 'INSERT INTO '.self::$table.' (pa_pais) VALUES (:pais)';
            $stmt = $connPdo->prepare($sql);            
            $stmt->bindValue(':pais', $pais);            
            $stmt->execute();

            if ($stmt->rowCount() > 0) {
                return true;
            } else {
                false;
            }
        }
    }