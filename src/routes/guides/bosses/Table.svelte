<script>
  import Element from '$lib/components/Element.svelte';
  export let boss;
</script>

<div>
  <h3>
    {boss.name} <Element element={boss.element}/>
  </h3>
  <h4>
    {boss.location}
  </h4>
  <h4>
    {boss.type}
  </h4>
  <table>
    <tbody>
      <tr>
        <td colspan=2>LVL {boss.LVL || '??'}</td><td/>
      </tr>
      <tr>
        <td colspan=2>HP {boss.HP || '??'}</td><td/>
      </tr>
      <tr>
        <td>STR {boss.STR || '??'}</td>
        <td>SPD {boss.SPD || '??'}</td>
      </tr>
      <tr>
        <td>MAG {boss.MAG || '??'}</td>
        <td>ACC {boss.ACC || '??'}</td>
      </tr>
      <tr>
        <td>PDF {boss.PDF || '??'}</td>
        <td>DEX {boss.DEX || '??'}</td>
      </tr>
      <tr>
        <td>MDF {boss.MDF || '??'}</td>
        <td/>
      </tr>
      {#if boss.steal}
        <tr>
          <td colspan=2>Steal: {boss.steal}</td><td/>
        </tr>
      {/if}
      {#if boss.arn}
        <tr>
          <td colspan=2>Arn: {boss.arn}</td><td/>
        </tr>
      {/if}
      {#if boss.drop}
        <tr>
          <td colspan=2>Drop: {boss.drop}</td><td/>
        </tr>
      {/if}
      {#if boss.note}
        <tr>
          <td colspan=2>Note: {boss.note}</td><td/>
        </tr>
      {/if}
    </tbody>
  </table>
</div>

<style>
  div {
    width: min(100%, 360px);
  }

  td {
    text-align: left;
    padding: .25rem .5rem;
    width: 7rem;
  }

  td:first-child {
    padding-left: 0;
    padding-right: 1rem;
  }
</style>
