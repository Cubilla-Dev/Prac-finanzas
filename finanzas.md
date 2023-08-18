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

### blogs 
- blog_id **(PK)**
- title
- body
- like_id **(FK)**
- cate_id **(FK)**

### categorys
- cate_id **(PK)**
- cate_name

### cate_body_values
- cate_body_id **(PK)**
- cate_id **(FK)**
- cate_body_value

### blog_saves   
- blogsave_id **(PK)**
- user_id **(FK)**
- blog_id **(FK)**

### likes
- like_id **(PK)**
- blog_id **(FK)**
- user_id **(FK)**


## Relaciones

1. Un ***budgets*** _pertenece_ a ***registratins***
2. Un ***ant_expenses*** _pertenece_ a ***registrations***