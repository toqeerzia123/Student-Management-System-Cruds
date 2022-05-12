using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Tasks.DAL;
namespace Tasks.Repositories
{
    public class GenericRepository<T> : IGenericRepository<T> where T : class
    {
        private readonly ApplicationDbContext _context;
        private readonly DbSet<T> _dbSet;

        public GenericRepository(ApplicationDbContext context)
        {
            _context = context;
            _dbSet = context.Set<T>();
        }
        public virtual async Task<T> FirstAsync(Expression<Func<T, bool>> predicate)
        {
            return await _dbSet.FirstAsync(predicate);
        }

        public virtual async Task<T> FirstOrDefaultAsync(Expression<Func<T, bool>> predicate)
        {
            return await _dbSet.FirstOrDefaultAsync(predicate);
        }


        public virtual IQueryable<T> GetAll()
        {
            return _dbSet.AsNoTracking();
        }

        public virtual IQueryable<T> FindBy(Expression<Func<T, bool>> predicate)
        {
            return _dbSet.Where(predicate);
        }

        public async Task<T> FindAsync(params object[] keys)
        {
            return await _dbSet.FindAsync(keys);
        }

        public virtual async Task AddAsync(T entity)
        {
            await _dbSet.AddAsync(entity);
        }

        public virtual void Delete(T entity)
        {
            _dbSet.Remove(entity);
        }

        public virtual void Delete(params object[] keys)
        {
            var entity = _dbSet.Find(keys);
            _dbSet.Remove(entity);
        }

        public virtual async Task UpdateAsync(T entity)
        {
            _dbSet.Update(entity);
        }

        public virtual void SaveChanges()
        {
            _context.SaveChanges();
        }

        public virtual async Task SaveChangesAsync()
        {
            await _context.SaveChangesAsync();
        }
    }
}
