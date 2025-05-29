export async function up(queryInterface, Sequelize) {
  return queryInterface.changeColumn("alunos", "email", {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  });
}

export async function down() {

}
