<script>
  import Rank from './Rank.svelte';
  export let leader;
</script>

<div>
  <h4>
    {leader.name}
  </h4>
  <table>
    <tbody>
      <tr>
        <td>{leader.men} MEN</td>
        <td>{leader.atk} ATK</td>
        <td>{leader.def} DEF</td>
      </tr>
      <tr>
        <td colspan="2">Infantry</td>
        <td><Rank rank={leader.infantry}/></td>
      </tr>
      <tr>
        <td colspan="2">Cavalry</td>
        <td><Rank rank={leader.cavalry}/></td>
      </tr>
      <tr>
        <td colspan="2">Scout</td>
        <td><Rank rank={leader.scout}/></td>
      </tr>
      <tr>
        <td colspan="2">Sorcery</td>
        <td><Rank rank={leader.sorcery}/></td>
      </tr>
    </tbody>
  </table>
</div>

<style>
  div {
    width: min(100%, 360px);
  }

  h4 {
    margin: 1rem 0 0.25rem 0;
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
