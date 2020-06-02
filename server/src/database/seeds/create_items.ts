import * as Knex from "knex";

export async function seed(knex: Knex): Promise<any> {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(() => {
      // Inserts seed entries
      return knex('items').insert([
        { id: 1, title: 'Lâmpadas', image: 'lampadas.svg' },
        { id: 2, title: 'Pilhas e Baterias', image: 'baterias.svg' },
        { id: 3, title: 'Papéis e Papelão', image: 'papeis-papelao.svg' },
        { id: 4, title: 'Resíduos Eletrônicos', image: 'eletronicos.svg' },
        { id: 5, title: 'Resíduos Orgânicos', image: 'organicos.svg' },
        { id: 6, title: 'Óleo de Cozinha', image: 'oleo.svg' }
      ]);
    });
};

/*
export async function seed(knex: Knex) {
  await knex('items').insert([
    { id: 1, title: 'Lâmpadas', image: 'lampadas.svg' },
    { id: 2, title: 'Pilhas e Baterias', image: 'baterias.svg' },
    { id: 3, title: 'Papéis e Papelão', image: 'papeis-papelao.svg' },
    { id: 4, title: 'Resíduos Eletrônicos', image: 'eletronicos.svg' },
    { id: 5, title: 'Resíduos Orgânicos', image: 'organicos.svg' },
    { id: 6, title: 'Óleo de Cozinha', image: 'oleo.svg' }
  ])
}
*/