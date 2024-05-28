<script>
  export let unit;
</script>

<div>
  <h4>
    {unit.name}
  </h4>
  <table>
    <tbody>
      <tr>
        <td>MEN</td>
        <td>{unit.men}</td>
      </tr>
      <tr>
        <td>ATK</td>
        <td>{unit.atk}</td>
      </tr>
      <tr>
        <td>DEF</td>
        <td>{unit.def}</td>
      </tr>
      <tr>
        <td>SKL</td>
        <td>{unit.skill || 'None'}</td>
      </tr>
    </tbody>
  </table>
</div>

<style>
  h4 {
    margin-bottom: 0.25rem;
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
