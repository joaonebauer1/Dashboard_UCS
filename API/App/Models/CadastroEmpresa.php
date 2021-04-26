<?php
    namespace App\Models;

    class CadastroEmpresa
    {
        
        public static function select(int $id) {
            $connPdo = new \PDO(DBDRIVE.': host='.DBHOST.'; dbname='.DBNAME, DBUSER, DBPASS);

            $sql = 'SELECT P.id,
                           P.pp_nome,
                           A.at_descricao,
                           R.ru_rua,
                           P.pp_numero,
                           P.pp_complemento,
                           B.ba_bairro,
                           C.cd_cidade,
                           E.uf_sigla,
                           R.ru_cep,
                           P.pp_fone_1,
                           P.pp_imagem
                      FROM pessoa P
                INNER JOIN atividade A ON A.id = P.pp_id_atividade
                INNER JOIN rua R ON R.id = P.pp_id_rua
                INNER JOIN bairro B ON B.id = R.ru_id_bairro
                INNER JOIN cidade C ON C.id = B.ba_id_cidade
                INNER JOIN estado E ON E.id = C.cd_id_estado
                INNER JOIN pais PA ON PA.id = E.uf_id_pais
                WHERE P.id = :id';
            $stmt = $connPdo->prepare($sql);
            $stmt->bindValue(':id', $id);
            $stmt->execute();

            if ($stmt->rowCount() > 0) {
                return $stmt->fetch(\PDO::FETCH_ASSOC);
            } else {
                throw new \Exception("Nenhuma empresa encontrada!");
            }
        }

        public static function selectAll() {
            $connPdo = new \PDO(DBDRIVE.': host='.DBHOST.'; dbname='.DBNAME, DBUSER, DBPASS);

            $sql = 'SELECT P.id,
                           P.pp_nome,
                           A.at_descricao,
                           R.ru_rua,
                           P.pp_numero,
                           P.pp_complemento,
                           B.ba_bairro,
                           C.cd_cidade,
                           E.uf_sigla,
                           R.ru_cep,
                           P.pp_fone_1,
                           P.pp_imagem
                      FROM pessoa P
                INNER JOIN atividade A ON A.id = P.pp_id_atividade
                INNER JOIN rua R ON R.id = P.pp_id_rua
                INNER JOIN bairro B ON B.id = R.ru_id_bairro
                INNER JOIN cidade C ON C.id = B.ba_id_cidade
                INNER JOIN estado E ON E.id = C.cd_id_estado
                INNER JOIN pais PA ON PA.id = E.uf_id_pais';
            $stmt = $connPdo->prepare($sql);
            $stmt->execute();

            if ($stmt->rowCount() > 0) {
                return $stmt->fetchAll(\PDO::FETCH_ASSOC);
            } else {
                throw new \Exception("Nenhuma empresa encontrada!");
            }
        }
    }