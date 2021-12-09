export default async function () {
  process.env.TZ = 'America/Mexico_City'; // CST does not work for some reason
};