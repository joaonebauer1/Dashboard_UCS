<?php
    namespace App\Controllers;

    use App\Models\CardCuidado;

    class CardCuidadoController
    {
        public function get() 
        {
           return CardCuidado::selectAll();           
        }

        public function post() 
        {
            
        }

        public function update() 
        {
            
        }

        public function delete() 
        {
            
        }
    }