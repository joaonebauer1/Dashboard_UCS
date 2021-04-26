<?php
    namespace App\Models;

    class Usuario
    {
        private static $table = 'usuario';

        public static function select($login, $senhaHash) {
            $connPdo = new \PDO(DBDRIVE.': host='.DBHOST.'; dbname='.DBNAME, DBUSER, DBPASS);

            $sql = 'SELECT * FROM '.self::$table.' WHERE login = :login AND senha = :senha';
            $stmt = $connPdo->prepare($sql);
            $stmt->bindValue(':login', $login);
            $stmt->bindValue(':senha', $senhaHash);
            $stmt->execute();

            if ($stmt->rowCount() > 0) {
                return $stmt->fetch(\PDO::FETCH_ASSOC);
            } else {
                throw new \Exception("Nenhum usuário encontrado!");
            }
        }        
    }