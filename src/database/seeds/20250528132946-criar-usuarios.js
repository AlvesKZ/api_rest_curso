import bcryptjs from "bcryptjs";

export async function up(queryInterface) {
  return queryInterface.bulkInsert(
    "users",
    [
      {
        nome: "Luiz",
        email: "luiz@gmail.com",
        password_hash: await bcryptjs.hash("senha123", 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: "Igor",
        email: "igor@gmail.com",
        password_hash: await bcryptjs.hash("senha123", 8),
        created_at: new Date(),
        updated_at: new Date(),
      },{
        nome: "Tung Tung Tung Sahur",
        email: "tung@gmail.com",
        password_hash: await bcryptjs.hash("senha123", 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  );
}

export async function down() {}
