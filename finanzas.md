## Listado de Finanzas

### Finanzas

### registration
- id_user **(PK)**
- name
- email
- password

### budgets
- id_budget **(PK)**
- id_user **(FK)**
- money
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
- comment
- user_id **(FK)**

## Relaciones

1. Un ***budgets*** _pertenece_ a ***registratins***
2. Un ***ant_expenses*** _pertenece_ a ***registrations***