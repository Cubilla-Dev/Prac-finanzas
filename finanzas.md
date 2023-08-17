## Listado de Finanzas

### Finanzas

### registration
- id_user **(PK)**
- name
- email
- password

### budgets    //repensar parece que esta mal hecho
- id_budget **(PK)**
- id_user **(FK)**
- money_income      puede tener varios ingresos modificar
- date
- name_expense
- expense

### ant_expenses
- id_ants **(PK)**
- id_user **(FK)**
- date
- expense
- name_expense

### comments
- comment_id **(PK)**
- title_blog
- comment_blog
- user_id **(FK)**

### blogs FALTA AGREGAR EL LIKE NO LO CREE
- blog_id **(PK)**
- title
- body
- LIKE
- CATEGORIAS    ###HACER OTRA TABLA

### blog_saves   
- blogsave_id **(PK)**
- user_id **(FK)**
- blog_id **(FK)**

## Relaciones

1. Un ***budgets*** _pertenece_ a ***registratins***
2. Un ***ant_expenses*** _pertenece_ a ***registrations***