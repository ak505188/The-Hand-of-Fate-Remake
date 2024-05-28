<script>
  export let type;
  export let range;
  export let movement;
  export let stat_change = 'None';

  const getTilesPluralized = amount => amount === 1 ? 'tile' : 'tiles';

  const movement_str = movement
    .map(tiles => `${tiles} ${getTilesPluralized(tiles)}`)
    .join(' | ');
</script>

<div>
  <h4>
    {type}
  </h4>
  <table>
    <tbody>
      <tr>
        <td>Attack Range</td>
        <td>{range} {getTilesPluralized(range)}</td>
      </tr>
      <tr>
        <td>Movement</td>
        <td>{movement_str}</td>
      </tr>
      <tr>
        <td>Stat Change</td>
        <td>{stat_change}</td>
      </tr>
    </tbody>
  </table>
</div>

<style>
  h4 {
    margin-bottom: .25rem;
  }

  td, th {
    text-align: left;
    padding: .25rem .5rem;
  }

  td:first-child, th:first-child {
    padding-left: 0;
    padding-right: 1rem;
  }
</style>
