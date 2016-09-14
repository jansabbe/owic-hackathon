using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace PetCupid
{
    [Route("api/[controller]")]
    public class PetCupidController : Controller
    {
        private PetCupidRepository _petCupidRepository;

        public PetCupidController()
        {
          _petCupidRepository = new PetCupidRepository();
        }
        // GET: api/values
        [HttpGet]
        public IEnumerable<PetCupid> Get()
        {
            return _petCupidRepository.Get();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public PetCupid Get(int id)
        {
            return _petCupidRepository.Get(id);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]PetCupid petCupid)
        {
            _petCupidRepository.Create(petCupid);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]PetCupid petCupid)
        {
            _petCupidRepository.Update(id, petCupid);
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _petCupidRepository.Delete(id);
        }
    }
}
