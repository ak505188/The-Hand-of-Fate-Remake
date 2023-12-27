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
        <td colspan=2><span>LVL</span> {boss.LVL || '??'}</td><td/>
      </tr>
      <tr>
        <td colspan=2><span>HP</span> {boss.HP || '??'}{boss.estimated ? ' *' : ''}</td><td/>
      </tr>
      <tr>
        <td><span>STR</span> {boss.STR || '??'}</td>
        <td><span>SPD</span> {boss.SPD || '??'}</td>
      </tr>
      <tr>
        <td><span>MAG</span> {boss.MAG || '??'}</td>
        <td><span>ACC</span> {boss.ACC || '??'}</td>
      </tr>
      <tr>
        <td><span>PDF</span> {boss.PDF || '??'}</td>
        <td><span>DEX</span> {boss.DEX || '??'}</td>
      </tr>
      <tr>
        <td><span>MDF</span> {boss.MDF || '??'}</td>
        <td/>
      </tr>
      {#if boss.steal}
        <tr>
          <td colspan=2><span>Steal:</span> {boss.steal}</td><td/>
        </tr>
      {/if}
      {#if boss.arn}
        <tr>
          <td colspan=2><span>Arn:</span> {boss.arn}</td><td/>
        </tr>
      {/if}
      {#if boss.drop}
        <tr>
          <td colspan=2><span>Drop:</span> {boss.drop}</td><td/>
        </tr>
      {/if}
      {#if boss.note}
        <tr>
          <td colspan=2><span>Note:</span> {boss.note}</td><td/>
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
  }

  td:first-child {
    padding-left: 0;
    padding-right: 1rem;
  }

  td span {
    display: inline-block;
    color: var(--color-text-alt);
    min-width: 3rem;
  }
</style>
