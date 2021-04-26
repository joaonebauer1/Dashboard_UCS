<?php
    namespace App\Models;

    class Pessoa
    {
        private static $table = 'pessoa';

        public static function select(int $id) {
            $connPdo = new \PDO(DBDRIVE.': host='.DBHOST.'; dbname='.DBNAME, DBUSER, DBPASS);

            $sql = 'SELECT * FROM '.self::$table.' WHERE id = :id';
            $stmt = $connPdo->prepare($sql);
            $stmt->bindValue(':id', $id);
            $stmt->execute();

            if ($stmt->rowCount() > 0) {
                return $stmt->fetch(\PDO::FETCH_ASSOC);
            } else {
                throw new \Exception("Nenhum usuário encontrado!");
            }
        }

        public static function selectAll() {
            $connPdo = new \PDO(DBDRIVE.': host='.DBHOST.'; dbname='.DBNAME, DBUSER, DBPASS);

            $sql = 'SELECT * FROM '.self::$table;
            $stmt = $connPdo->prepare($sql);
            $stmt->execute();

            if ($stmt->rowCount() > 0) {
                return $stmt->fetchAll(\PDO::FETCH_ASSOC);
            } else {
                throw new \Exception("Nenhum cliente encontrado!");
            }
        }

        public static function insert($data)
        {
            $connPdo = new \PDO(DBDRIVE.': host='.DBHOST.'; dbname='.DBNAME, DBUSER, DBPASS);

            $sql = 'INSERT INTO '.self::$table.' (pp_nome, pp_tipo, pp_email, pp_fone_1, pp_fone_2, pp_documento, pp_id_atividade, pp_id_rua, pp_numero, pp_complemento,
                    pp_imagem, pp_mensagem, pp_feriano, pp_ativo) 
                    VALUES (:nome, :tipo, :email, :fone1, :fone2, :doc, :ativ, :idrua, :num, :comp, :img, :msg, :feri, 1)';
            $stmt = $connPdo->prepare($sql);            
            $stmt->bindValue(':nome', $data['nome']);
            $stmt->bindValue(':tipo', $data['tipo']);
            $stmt->bindValue(':email', $data['email']);
            $stmt->bindValue(':fone1', $data['fone_1']);
            $stmt->bindValue(':fone2', $data['fone2']);
            $stmt->bindValue(':doc', $data['documento']);
            $stmt->bindValue(':ativ', $data['atividade']);
            $stmt->bindValue(':idrua', $data['rua']);
            $stmt->bindValue(':num', $data['numero']);
            $stmt->bindValue(':comp', $data['complemento']);
            $stmt->bindValue(':img', $data['imagem']);
            $stmt->bindValue(':msg', $data['mensagem']);
            $stmt->bindValue(':feri', $data['feriado']);            
            $stmt->execute();

            if ($stmt->rowCount() > 0) {
                return 'Cliente inserido com sucesso!';
            } else {
                throw new \Exception("Falha ao inserir cliente!");
            }
        }
    }