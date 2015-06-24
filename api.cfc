<cfcomponent extends="JSONUtil">

<cffunction name="testParms" returntype="any" access="remote" returnformat="plain">
	<cfreturn serializeToJSON(arguments, true, true)>
</cffunction>


</cfcomponent>