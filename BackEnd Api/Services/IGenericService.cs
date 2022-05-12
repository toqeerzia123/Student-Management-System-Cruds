using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Tasks.Services
{
    public interface IGenericService<T> where T : class
    {
        Task<T> FirstAsync(Expression<Func<T, bool>> predicate);
        Task<T> FirstOrDefaultAsync(Expression<Func<T, bool>> predicate);

        /// <summary>
        /// Get all queries
        /// </summary>
        /// <returns>IQueryable queries</returns>
        IQueryable<T> GetAll();

        /// <summary>
        /// Find queries by predicate
        /// </summary>
        /// <param name="predicate">search predicate (LINQ)</param>
        /// <returns>IQueryable queries</returns>
        IQueryable<T> FindBy(Expression<Func<T, bool>> predicate);

        /// <summary>
        /// Find entity by keys
        /// </summary>
        /// <param name="keys">search key</param>
        /// <returns>T entity</returns>
        Task<T> FindAsync(params object[] keys);

        /// <summary>
        /// Add new entity
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        Task AddAsync(T entity);

        /// <summary>
        /// Remove entity from database
        /// </summary>
        /// <param name="entity"></param>
        Task DeleteAsync(T entity);

        /// <summary>
        /// Remove entity from database
        /// </summary>
        /// <param name="keys">entity keys</param>
        Task DeleteAsync(params object[] keys);

        /// <summary>
        /// Edit entity
        /// </summary>
        /// <param name="entity"></param>
        Task UpdateAsync(T entity);

        /// <summary>
        /// Persists all updates to the data source.
        /// </summary>
    }
}
