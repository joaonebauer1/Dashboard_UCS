<?php
    namespace App\Models;

    class CardCuidado
    {
        private static $table = 'card_cuidados';                        

        public static function selectAll() {
            $connPdo = new \PDO(DBDRIVE.': host='.DBHOST.'; dbname='.DBNAME, DBUSER, DBPASS);

            $sql = 'SELECT * FROM '.self::$table .' ORDER BY id ASC';
            $stmt = $connPdo->prepare($sql);
            $stmt->execute();

            if ($stmt->rowCount() > 0) {
                return $stmt->fetchAll(\PDO::FETCH_ASSOC);
            } else {
                throw new \Exception("Nenhum alerta encontrado!");
            }
        }            
    }