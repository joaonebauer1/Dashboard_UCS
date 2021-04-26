<?php
    namespace App\Models;

    class Estado
    {
        private static $table = 'estado';

        public static function select(int $id) {
            $connPdo = new \PDO(DBDRIVE.': host='.DBHOST.'; dbname='.DBNAME, DBUSER, DBPASS);

            $sql = 'SELECT * FROM '.self::$table.' WHERE id = :id';
            $stmt = $connPdo->prepare($sql);
            $stmt->bindValue(':id', $id);
            $stmt->execute();

            if ($stmt->rowCount() > 0) {
                return $stmt->fetch(\PDO::FETCH_ASSOC);
            } else {
                throw new \Exception("Nenhum estado encontrado!");
            }
        }

        public static function insert($estado, $sigla, $idpais)
        {
            $connPdo = new \PDO(DBDRIVE.': host='.DBHOST.'; dbname='.DBNAME, DBUSER, DBPASS);

            $sql = 'INSERT INTO '.self::$table.' (uf_estado, uf_sigla, uf_id_pais) VALUES (:estado, :sigla, :idpais)';
            $stmt = $connPdo->prepare($sql);            
            $stmt->bindValue(':estado', $estado);
            $stmt->bindValue(':sigla', $sigla);            
            $stmt->bindValue(':idpais', $idpais);
            $stmt->execute();

            if ($stmt->rowCount() > 0) {
                return true;
            } else {
                false;
            }
        }
    }