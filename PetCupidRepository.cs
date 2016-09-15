using System.Collections.Generic;
using System.Linq;

namespace PetCupid
{
    public class PetCupidRepository
    {
        private PetCupidContext _context;

        public PetCupidRepository(PetCupidContext context)
        {
          _context = context;
        }

        public IEnumerable<PetCupid> Get()
        {
            return _context.PetCupids;
        }

        public PetCupid Get(int id)
        {
            return _context.PetCupids.SingleOrDefault(pc => pc.Id == id);
        }

        public void Create(PetCupid petCupid)
        {
            var newId = _context.PetCupids.Max(pc => pc.Id) + 1;
            petCupid.Id = newId;
            _context.PetCupids.Add(petCupid);
            _context.SaveChanges();
        }

        public void Update(int id, PetCupid petCupid)
        {
            var currentPetCupid = this.Get(id);

            if (currentPetCupid != null)
            {
                currentPetCupid.Name = petCupid.Name;
                currentPetCupid.Kind = petCupid.Kind;
                currentPetCupid.Img = petCupid.Img;
                currentPetCupid.ProfileText = petCupid.ProfileText;
                currentPetCupid.Popularity = petCupid.Popularity;
            }

            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var petCupidToDelete = this.Get(id);

            if (petCupidToDelete != null)
            {
                _context.PetCupids.Remove(petCupidToDelete);
                _context.SaveChanges();
            }
        }
    }
}