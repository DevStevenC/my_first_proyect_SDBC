import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Crear un tenant de prueba
  const tenant = await prisma.tenant.create({
    data: {
      name: 'Tech Solutions',
    },
  });

  // Crear un usuario de prueba asociado al tenant
  await prisma.user.create({
    data: {
      email: 'admin@techsolutions.com',
      name: 'Admin Tech',
      password: 'password123',
      tenantId: tenant.id,
    },
  });

  console.log('Seed ejecutado con éxito');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });