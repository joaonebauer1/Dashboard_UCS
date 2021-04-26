<?php
    namespace App\Models;

    class Atendimento
    {        
        public static function select(int $idEmpresa) {
            $connPdo = new \PDO(DBDRIVE.': host='.DBHOST.'; dbname='.DBNAME, DBUSER, DBPASS);

            $sql = 'SELECT D.ds_descricao,
                           A.ad_hora_ini,
                           A.ad_hora_fim
                      FROM atendimento A
                     INNER JOIN dia_semana D ON D.id = A.ad_id_dia_semana
                     WHERE A.ad_id_pessoa = :id
                     ORDER BY A.id ASC';
            $stmt = $connPdo->prepare($sql);
            $stmt->bindValue(':id', $idEmpresa);
            $stmt->execute();

            if ($stmt->rowCount() > 0) {
                return $stmt->fetchAll(\PDO::FETCH_ASSOC);
            } else {
                throw new \Exception("Nenhum horário encontrado!");
            }
        }       

        public static function insert($data)
        {
            $connPdo = new \PDO(DBDRIVE.': host='.DBHOST.'; dbname='.DBNAME, DBUSER, DBPASS);

            $sql = 'INSERT INTO '.self::$table.' (email, password, name) VALUES (:em, :pa, :na)';
            $stmt = $connPdo->prepare($sql);
            $stmt->bindValue(':em', $data['email']);
            $stmt->bindValue(':pa', $data['password']);
            $stmt->bindValue(':na', $data['name']);
            $stmt->execute();

            if ($stmt->rowCount() > 0) {
                return 'Usuário(a) inserido com sucesso!';
            } else {
                throw new \Exception("Falha ao inserir usuário(a)!");
            }
        }
    }