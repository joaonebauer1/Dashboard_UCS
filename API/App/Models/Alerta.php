<?php
    namespace App\Models;

    class Alerta
    {
        private static $table = 'alerta';        
        private static $joinTable = 'bandeira';        

        public static function selectAll() {
            $connPdo = new \PDO(DBDRIVE.': host='.DBHOST.'; dbname='.DBNAME, DBUSER, DBPASS);

            $sql = 'SELECT A.*, B.* FROM '.self::$table .' A INNER JOIN ' .self::$joinTable .' B ON A.al_id_bandeira = B.id';
            $stmt = $connPdo->prepare($sql);
            $stmt->execute();

            if ($stmt->rowCount() > 0) {
                return $stmt->fetchAll(\PDO::FETCH_ASSOC);
            } else {
                throw new \Exception("Nenhum alerta encontrado!");
            }
        }

        public static function select(int $id) {
            $connPdo = new \PDO(DBDRIVE.': host='.DBHOST.'; dbname='.DBNAME, DBUSER, DBPASS);

            $sql = 'SELECT A.*, B.* FROM '.self::$table .' A INNER JOIN ' .self::$joinTable .' B ON A.al_id_bandeira = B.id WHERE A.id = :id';
            $stmt = $connPdo->prepare($sql);
            $stmt->bindValue(':id', $id);
            $stmt->execute();

            if ($stmt->rowCount() > 0) {
                return $stmt->fetch(\PDO::FETCH_ASSOC);
            } else {
                throw new \Exception("Nenhum alerta encontrado!");
            }
        }       
    }